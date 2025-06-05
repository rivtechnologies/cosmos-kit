"use client";

import { useChain } from "@cosmos-kit/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink } from "lucide-react";

export function ConnectWallet() {
  const { address, status, username, connect, disconnect } =
    useChain("cosmoshub");

  const isConnected = status === "Connected";

  console.log("cosmos kit state", { address, status, username });
  const truncateAddress = (addr: string) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-6)}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">Status:</span>
              <Badge
                variant={isConnected ? "default" : "secondary"}
                className={isConnected ? "bg-green-500" : ""}
              >
                {status}
              </Badge>
            </div>
            {address && (
              <a
                href={`https://www.mintscan.io/cosmos/address/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
              >
                View on Explorer <ExternalLink size={12} />
              </a>
            )}
          </div>

          {username && (
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">Username:</span>
              <span className="text-sm">{username}</span>
            </div>
          )}

          {address && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">Address:</span>
                <span className="text-sm font-mono">
                  {truncateAddress(address)}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => copyToClipboard(address)}
                title="Copy address"
              >
                <Copy size={14} />
              </Button>
            </div>
          )}

          <div className="flex gap-3 mt-2">
            {!isConnected ? (
              <Button className="w-full" onClick={() => connect()}>
                Connect Wallet
              </Button>
            ) : (
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => disconnect()}
              >
                Disconnect
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
